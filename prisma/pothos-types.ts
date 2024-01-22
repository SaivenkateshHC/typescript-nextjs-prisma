/* eslint-disable */
import type { Prisma, User, Post, Product } from "@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "posts";
        ListRelations: "posts";
        Relations: {
            posts: {
                Shape: Post[];
                Name: "Post";
            };
        };
    };
    Post: {
        Name: "Post";
        Shape: Post;
        Include: Prisma.PostInclude;
        Select: Prisma.PostSelect;
        OrderBy: Prisma.PostOrderByWithRelationInput;
        WhereUnique: Prisma.PostWhereUniqueInput;
        Where: Prisma.PostWhereInput;
        Create: {};
        Update: {};
        RelationName: "author";
        ListRelations: never;
        Relations: {
            author: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    Product: {
        Name: "Product";
        Shape: Product;
        Include: never;
        Select: Prisma.ProductSelect;
        OrderBy: Prisma.ProductOrderByWithRelationInput;
        WhereUnique: Prisma.ProductWhereUniqueInput;
        Where: Prisma.ProductWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}