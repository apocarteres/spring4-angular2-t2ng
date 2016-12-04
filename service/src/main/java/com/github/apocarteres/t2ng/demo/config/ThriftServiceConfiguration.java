package com.github.apocarteres.t2ng.demo.config;

import com.github.apocarteres.demo.person.TPersonService;
import com.github.apocarteres.t2ng.demo.service.PersonService;
import org.apache.thrift.TBaseProcessor;
import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.protocol.TProtocolFactory;
import org.apache.thrift.server.TServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ThriftServiceConfiguration {
    @Bean
    TProtocolFactory tProtocolFactory() {
        return new TJSONProtocol.Factory();
    }

    @Bean
    ServletRegistrationBean exchangeResourceBean(
            TProtocolFactory factory,
            PersonService impl
    ) {
        return register("person", new TPersonService.Processor<>(impl), factory);
    }

    private static <T> ServletRegistrationBean register(
            String name,
            TBaseProcessor<T> processor,
            TProtocolFactory factory
    ) {
        ServletRegistrationBean bean = new ServletRegistrationBean(
                new TServlet(processor, factory),
                true,
                String.format("/%s/*", name)
        );
        bean.setName(name);
        return bean;
    }
}
