CREATE TABLE url_mapping (
     url_mapping_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     short_url CHAR(5) NOT NULL,
     long_url VARCHAR(600) NOT NULL,
     PRIMARY KEY (url_mapping_id)
);

CREATE TABLE url_count (
     url_count_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     url_mapping_id MEDIUMINT NOT NULL,
     count SMALLINT NOT NULL,
     PRIMARY KEY (url_count_id),
     FOREIGN KEY (url_mapping_id)
      REFERENCES url_mapping(url_mapping_id)
);