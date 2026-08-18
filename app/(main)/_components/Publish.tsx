import { Doc } from "@/convex/_generated/dataModel";
import {
    PopoverTrigger,
    Popover,
    PopoverContent,
} from "@/components/ui/popover";
import useOrigin from "@/hooks/useOrigin";

interface PublishProps {
    initialData: Doc<"documents">;
}

const Publish = ({ initialData }: PublishProps) => {
    const origin = useOrigin();
    return <div>Publish</div>;
};

export default Publish;
