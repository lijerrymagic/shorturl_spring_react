package com.project.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.project.demo.entity.UrlMapping;
import com.project.demo.mapper.UrlMappingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.net.URI;

@RestController
@RequestMapping
@Transactional
public class IndexController {
    @Autowired
    private UrlMappingMapper urlMappingMapper;


    @GetMapping("")
    public ModelAndView getIndex() {
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }

    @GetMapping("/{shortUrl}")
    @CrossOrigin(origins = "http://localhost:8080")
    public ResponseEntity<?> getLongUrl(@PathVariable("shortUrl") String shortUrl) {
        QueryWrapper<UrlMapping> qw = new QueryWrapper<>();
        qw.eq("short_url", shortUrl);
        UrlMapping mappingResult = urlMappingMapper.selectOne(qw);

        if (mappingResult == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .build();
        }
        // update count number plus one
        String longUrl = mappingResult.getLongUrl();
        Integer curCount = mappingResult.getCount();
        mappingResult.setCount(curCount + 1);
        urlMappingMapper.update(mappingResult, new UpdateWrapper<>());
        return ResponseEntity.status(HttpStatus.FOUND)
                .location(URI.create("http://" + longUrl))
                .build();
    }
}
