export interface UserProps{
    id:number;
    name:string;
    Status:'All'|'Maybe'|'Invited';
} 

export const UserData=[
    {id:1, name:"Sania",Status:"all"},
    {id:2,name:"Mitalee", Status:"all"},
    {id:3,name:"Shrawani", Status:"all"},
    {id:4,name:"Purva", Status:"all"},
    {id:5,name:"Mrudula", Status:"all"}
]