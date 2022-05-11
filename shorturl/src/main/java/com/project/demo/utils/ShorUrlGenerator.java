package com.project.demo.utils;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class ShorUrlGenerator {
    private static int SHORTURL_SIZE = 5;
    public static String generateShortUrl(String longUrl) {
        String encodedStr = base64Encode(getMD5HashValue(longUrl));
        return encodedStr.substring(0, SHORTURL_SIZE);
    }

    private static byte[] getMD5HashValue(String longUrl) {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalArgumentException(e);
        }
        byte[] result = md.digest(longUrl.getBytes());
        return result;
    }

    private static String base64Encode(byte[] md5HashValue) {
        String encodedString = Base64.getEncoder().encodeToString(md5HashValue);
        return encodedString;
    }
}
