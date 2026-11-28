// Part 1 - Define User Interface
interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "viewer" | "editor";
    createdAt: Date;
    avatar?: string;
}



// Part 2 - Create Five User Objects
const user1: User = {
    id: 1,
    name: "Erin",
    email: "erin@example.com",
    role: "admin",
    createdAt: new Date("2026-01-10"),
    avatar: "https://example.com/erin.png"
};

const user2: User = {
    id: 2,
    name: "Alee",
    email: "alee@example.com",
    role: "viewer",
    createdAt: new Date("2026-02-15")
};

const user3: User = {
    id: 3,
    name: "Delna",
    email: "delna@example.com",
    role: "editor",
    createdAt: new Date("2026-03-20"),
    avatar: "https://example.com/sarah.png"
};

const user4: User = {
    id: 4,
    name: "Amal",
    email: "amal@example.com",
    role: "viewer",
    createdAt: new Date("2026-04-05")
};

const user5: User = {
    id: 5,
    name: "Chacko",
    email: "chacko@example.com",
    role: "admin",
    createdAt: new Date("2026-05-12")
};


// Excess Property Check
 /*
const invalidUser: User = {
    id: 6,
    name: "Ashin",
    email: "ashin@example.com",
    role: "editor",
    createdAt: new Date(),
    age: 25
};
*/



// Part 3 - Readonly Utility Type
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = user1;

// readonlyUser.name = "Alex";



// Part 4 - Partial Utility Type
function updateUser(user: User, changes: Partial<User>): User {
    return {
        ...user,
        ...changes
    };
}

const updatedUser = updateUser(user1, {
    name: "Erin Eldho",
    role: "editor"
});



// Part 5 - Interface vs Type Alias

// Using Interface and extends
interface AdminUser extends User {
    permissions: string[];
}

const adminUser: AdminUser = {
    id: 6,
    name: "Michael",
    email: "michael@example.com",
    role: "admin",
    createdAt: new Date("2026-06-10"),
    permissions: ["create", "edit", "delete"]
};


// Using Type Alias and Intersection
type UserDetails = {
    id: number;
    name: string;
};

type AdminDetails = UserDetails & {
    permissions: string[];
};

const adminDetails: AdminDetails = {
    id: 7,
    name: "Emma",
    permissions: ["view", "edit"]
};


// Type Alias for Union Types
type UserRole = "admin" | "viewer" | "editor";
const currentRole: UserRole = "viewer";


// Test
console.log("Five User Objects:");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log("Readonly User:");
console.log(readonlyUser);
console.log("Updated User:");
console.log(updatedUser);
console.log("Original User:");
console.log(user1);
console.log("Admin User using Interface:");
console.log(adminUser);
console.log("Admin Details using Type Alias:");
console.log(adminDetails);
console.log("User Role:");
console.log(currentRole);
