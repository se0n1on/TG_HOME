package tg.home.com.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
@MapperScan("tg.dq.**.mapper, tg.dq.**.**.mapper") // 매퍼 인터페이스의 위치 지정
public class MyBatisConfig {
	
    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);

        // MyBatis 설정 파일 위치 지정
        sqlSessionFactoryBean.setConfigLocation(new ClassPathResource("mybatis/config/mybatis-config.xml"));
        sqlSessionFactoryBean.setTypeAliasesPackage("tg.dq.**.entity, tg.dq.**.**.entity, tg.dq.com.util");
//        sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("tg/dq/**/mapper/*.xml"));

        return sqlSessionFactoryBean.getObject();
    }
}

