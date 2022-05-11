package com.project.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.project.demo.entity.UrlMapping;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface UrlMappingMapper extends BaseMapper<UrlMapping> {

}
