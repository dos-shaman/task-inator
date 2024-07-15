import { db } from "@/lib/db";
import { create } from "@/actions/create-board";
const OrganizationIdPage = () => {

    return (
        <div>
            <form action={create}>
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Well, let's get on it ya cunt!"
                    className="border border-black p-1" 
                />
            </form>
        </div>
    );
};

export default OrganizationIdPage;