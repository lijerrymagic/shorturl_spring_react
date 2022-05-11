package com.project.demo;

import com.baomidou.mybatisplus.core.toolkit.Assert;
import com.project.demo.entity.UrlMapping;
import com.project.demo.mapper.UrlMappingMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest

class ShorturlApplicationTests {

	@Autowired
	private UrlMappingMapper urlMappingMapper;

	@Test
	@Transactional
	public void testSelect() {
//		System.out.println(("----- selectAll method test ------"));
//		List<UrlMapping> mappingList = urlMappingMapper.selectList(null);
//		urlMappingMapper.insert(new UrlMapping().builder().shortUrl("hi").longUrl("hihi").build());
//		mappingList.forEach(System.out::println);
	}
}
