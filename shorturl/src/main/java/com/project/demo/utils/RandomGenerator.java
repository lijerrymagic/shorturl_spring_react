package com.project.demo.utils;

public class RandomGenerator {
    public static String getRandomstring(int size) {
        StringBuilder result = new StringBuilder();
        String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (int i = 0; i < size; i++) {
            result.append(chars.charAt((int) Math.floor(Math.random() * chars.length())));
        }
        return result.toString();
    }
}
