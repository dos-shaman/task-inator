import { db } from "@/lib/db";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
const OrganizationIdPage = async () => {
    const boards = await db.board.findMany();
    return (
        <div className="flex flex-col space-y-4">
            <form action={create}>
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Oi! 'Omlanda nicked my son."
                    className="border border-black p-1" 
                />
                <Button type="submit">
                    Find his son
                </Button>
            </form>
            <div className="space-y-2">
                {boards.map((board) => (
                    <div key={board.id}>
                        Board title: {board.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrganizationIdPage;