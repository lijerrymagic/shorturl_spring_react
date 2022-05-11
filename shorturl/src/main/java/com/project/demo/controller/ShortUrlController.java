package com.project.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.project.demo.DTOs.CreateUrlMappingDto;
import com.project.demo.entity.UrlMapping;
import com.project.demo.mapper.UrlMappingMapper;
import com.project.demo.utils.ShorUrlGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path="/shortUrl")
@Transactional
public class ShortUrlController {
    @Autowired
    private UrlMappingMapper urlMappingMapper;

    @PostMapping(path="/create")
    public ResponseEntity<?> createShortUrl(@RequestBody CreateUrlMappingDto urlMappingDto) {
        Map<String, String> shortUrlMap = urlMappingMapper.selectList(null).stream().collect(Collectors.toMap(UrlMapping::getShortUrl, UrlMapping::getLongUrl));
        String longUrl = urlMappingDto.getLongUrl();
        String shortUrlKey = ShorUrlGenerator.generateShortUrl(longUrl);
        UrlMapping newUrlMapping = new UrlMapping().builder().shortUrl(shortUrlKey).longUrl(urlMappingDto.getLongUrl()).count(0).build();
        if (shortUrlMap.containsKey(shortUrlKey)) {
            return new ResponseEntity<>(newUrlMapping, HttpStatus.OK);
        }
        urlMappingMapper.insert(newUrlMapping);
        return new ResponseEntity<>(newUrlMapping, HttpStatus.OK);
    }

    @GetMapping("/count/{shortUrl}")
    public ResponseEntity<?> getLongUrl(@PathVariable("shortUrl") String shortUrl) {
        QueryWrapper<UrlMapping> qw = new QueryWrapper<>();
        qw.eq("short_url", shortUrl);
        UrlMapping mappingResult = urlMappingMapper.selectOne(qw);

        if (mappingResult == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .build();
        }
        return new ResponseEntity<>(mappingResult, HttpStatus.OK);
    }
}
