import { revalidatePath } from "next/cache";
import AddButton from "./addButton";

const todos: string[] = ["Teste"];
export default function Home() {
  async function addNewTodo(todo: string) {
    "use server";

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    todos.push(todo);
    revalidatePath("/formPostWithTransition");
  }
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <AddButton addTodo={addNewTodo} />
      </div>
    </main>
  );
}
