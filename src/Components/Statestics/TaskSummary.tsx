import { Ellipsis } from "lucide-react";
import { FileIcon, ProjectIcon } from "../../Icons";

export default function TaskSummary() {
  return (
    <div className="bg-white  py-6 px-5 rounded-lg">
      <div className=" flex justify-between items-center">
        <h3 className="text-2xl font-bold">Task Summary</h3>
        <Ellipsis size={16} />
      </div>

      {/* card container*/}
      <div className="grid grid-cols-3 gap-5 text-white my-9">
        {/* project */}
        <div className="bg-primary rounded-xl h-32 grid place-items-center">
          <div className="text-center space-y-2">
            <ProjectIcon />

            <p className="text-xs">Projects</p>
            <p className="font-bold">40</p>
          </div>
        </div>

        {/* assigned */}
        <div className="bg-primary rounded-xl h-32 grid place-items-center">
          <div className="text-center space-y-2">
            <ProjectIcon />

            <p className="text-xs">Assigned</p>
            <p className="font-bold">79</p>
          </div>
        </div>

        {/* completed */}
        <div className="bg-dark4 rounded-xl h-32 grid place-items-center">
          <div className="text-center space-y-2">
            <FileIcon />

            <p className="text-xs text-dark2">Completed</p>
            <p className="font-bold text-black">40</p>
          </div>
        </div>
      </div>

      {/* foot */}
      <div className="space-y-2">
        <p className="text-xs text-dark2">On-time Completion Rate</p>
        <div className="flex items-end gap-4">
          <p className="text-2xl font-bold">95%</p>
          <p className="text-primary text-xs font-medium">+2.5%</p>
        </div>
      </div>
    </div>
  );
}
