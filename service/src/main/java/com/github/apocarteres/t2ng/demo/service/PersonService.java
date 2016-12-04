package com.github.apocarteres.t2ng.demo.service;

import com.github.apocarteres.demo.person.TPerson;
import com.github.apocarteres.demo.person.TPersonLookupRequest;
import com.github.apocarteres.demo.person.TPersonService;
import org.apache.thrift.TException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public final class PersonService implements TPersonService.Iface {

    private static final Map<String, TPerson> KNOWN_PERSONS = new HashMap<String, TPerson>() {{
        put("manager", new TPerson("Bob", 21));
        put("programmer", new TPerson("Alice", 36));
        put("qa", new TPerson("Eve", 18));
    }};

    @Override
    public TPerson find(TPersonLookupRequest request) throws TException {
        return Optional.ofNullable(KNOWN_PERSONS.get(request.getRole())).orElseThrow(() ->
                new RuntimeException("no such person")
        );
    }
}
