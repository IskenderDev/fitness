export type Task = {
  id: string;
  name: string;
  done: boolean;
};

export const tasks: Task[] = [
  {
    id: "1",
    name: "10 000 шагов",
    done: true
  },
  {
    id: "2",
    name: "Выпить 2 л воды",
    done: false
  },
  {
    id: "3",
    name: "Читать 30 минут",
    done: true
  },
  {
    id: "4",
    name: "Медитировать 10 минут",
    done: false
  },
];
