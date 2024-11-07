# BLOG - 1

### The significance of union and intersection types in Typescript.

Union and Intersection types in TypeScript are more powerful to manage and organize types. It makes code simpler, reusable and safer.

-   Union Types ( | ) : Union types let you specify that a value can be one of several types. This is helpful when working with variables which can be multiple types.

```javascript
# Example Of Union Types

type NewUser = {
    name : string,
    userName : string,
    email : string,
    password : string,
}

type User = {
    userName : string,
    password : string,
}

const isNewUser = NewUser | User;
```

In this example, isNewUser can be either a NewUser or a User.

-   Intersection Types ( & ) : Intersection types let you combine multiple types into a single one, where a variable has all the properties of each type which is defined.

```javascript
# Example Of Intersection Types

type Student = {
    name : string,
}

type IDCard = {
    hasIdCard : true,
}

const libraryAccess = Student & IDCard;
```

Here, libraryAccess combines with Student and IDCard Properties, to get library access you need to have both Student and IDCard properties.

#### Together they make TypeScript code cleaner and more organized and safer
