export type Task={
    taskId:number,
    userId:number,
    summary:string,
    title:string,
    dueDate:Date,
    isCompleted:boolean,
    completedDate:Date
};
export type NewTaskData={
    title:string,
    summary:string,
    dueDate:Date,
    completedDate:Date,
    userId:number
}