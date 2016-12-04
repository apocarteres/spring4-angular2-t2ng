namespace java com.github.apocarteres.demo.person
namespace js person

struct TPersonLookupRequest {
    1: string role
    2: i32 limit
}

struct TPerson {
    1: string name
    2: i32 age
}

service TPersonService {
    TPerson find(1:TPersonLookupRequest request)
}
