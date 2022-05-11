package com.project.demo.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UrlMapping {
    @TableId
    private Integer urlMappingId;
    private String shortUrl;
    private String longUrl;
    private Integer count;
}
