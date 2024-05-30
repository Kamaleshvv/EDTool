package com.EDTool.security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.Base64;

public class EncryptionUtil {

    private static final String ENCRYPTION_ALGORITHM = "AES/GCM/NoPadding";
    private static final int GCM_TAG_LENGTH = 16;
    private static final int GCM_IV_LENGTH = 12;
    private static final String KEY = "1234567890123456"; // Replace with a secure key

    public static String encrypt(String data) throws Exception {
        Cipher cipher = Cipher.getInstance(ENCRYPTION_ALGORITHM);
        SecretKey secretKey = new SecretKeySpec(KEY.getBytes(StandardCharsets.UTF_8), "AES");
        byte[] iv = new byte[GCM_IV_LENGTH];
        SecureRandom secureRandom = new SecureRandom();
        secureRandom.nextBytes(iv);
        GCMParameterSpec parameterSpec = new GCMParameterSpec(GCM_TAG_LENGTH * 8, iv);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, parameterSpec);
        byte[] encryptedData = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
        byte[] encryptedDataWithIv = new byte[iv.length + encryptedData.length];
        System.arraycopy(iv, 0, encryptedDataWithIv, 0, iv.length);
        System.arraycopy(encryptedData, 0, encryptedDataWithIv, iv.length, encryptedData.length);
        return Base64.getEncoder().encodeToString(encryptedDataWithIv);
    }

    public static String decrypt(String encryptedData) throws Exception {
        byte[] encryptedDataWithIv = Base64.getDecoder().decode(encryptedData);
        byte[] iv = new byte[GCM_IV_LENGTH];
        System.arraycopy(encryptedDataWithIv, 0, iv, 0, iv.length);
        byte[] cipherText = new byte[encryptedDataWithIv.length - iv.length];
        System.arraycopy(encryptedDataWithIv, iv.length, cipherText, 0, cipherText.length);
        Cipher cipher = Cipher.getInstance(ENCRYPTION_ALGORITHM);
        SecretKey secretKey = new SecretKeySpec(KEY.getBytes(StandardCharsets.UTF_8), "AES");
        GCMParameterSpec parameterSpec = new GCMParameterSpec(GCM_TAG_LENGTH * 8, iv);
        cipher.init(Cipher.DECRYPT_MODE, secretKey, parameterSpec);
        byte[] decryptedData = cipher.doFinal(cipherText);
        return new String(decryptedData, StandardCharsets.UTF_8);
    }
}