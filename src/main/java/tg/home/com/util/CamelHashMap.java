package tg.home.com.util;

import com.google.common.base.CaseFormat;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@SuppressWarnings("rawtypes")
public class CamelHashMap extends LinkedHashMap {

    @Override
    public Object put(Object key, Object value) {
        return super.put(toLowerCamel((String) key), value);
    }

    private static String toLowerCamel(String key) {
        return CaseFormat.UPPER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, key);
    }

     // JSONArray CONVERT(HashMap)
    @SuppressWarnings("rawtypes")
    public static JSONArray hashMapListToJSONArray(ArrayList<HashMap> dataList) {
        JSONArray jsonArray = new JSONArray();

        for (HashMap<String, Object> data : dataList) {
            JSONObject jsonItem = new JSONObject();

            for (Map.Entry<String, Object> entry : data.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();

                // JSONObject에 데이터 추가
                jsonItem.put(key, value);
            }

            // JSONArray에 JSONObject 추가
            jsonArray.add(jsonItem);
        }

        return jsonArray;
    }

    // JSONArray CONVERT(CamelHashMap)
    @SuppressWarnings("rawtypes")
    public static JSONArray camelHashMapListToJSONArray(ArrayList<CamelHashMap> dataList) {
        JSONArray jsonArray = new JSONArray();

        for (CamelHashMap data : dataList) {
            JSONObject jsonItem = new JSONObject();

            data.forEach((key, value) -> {
                // JSONObject에 데이터 추가
                jsonItem.put(key, value);
            });

            // JSONArray에 JSONObject 추가
            jsonArray.add(jsonItem);
        }

        return jsonArray;
    }
}
