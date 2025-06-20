export class Task{
    constructor(
        public title:string,
        public description:string,
        public assigned_to:string,
        public created_at:string,
        public priority:string,
        public status:string,
        public id:string,
    ){}
}