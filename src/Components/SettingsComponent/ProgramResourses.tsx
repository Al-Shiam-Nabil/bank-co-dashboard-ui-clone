import { Plus } from "lucide-react";
import { FileIcon2, FolderIcon } from "../../Icons";

export default function ProgramResourses() {
  const folderArr = [
    {
      title: "2021 Invoice",
      size: "120 MB",
    },
    {
      title: "2021 Invoice",
      size: "120 MB",
    },
    {
      title: "2021 Invoice",
      size: "120 MB",
    },
    {
      title: "2021 Invoice",
      size: "120 MB",
    },
    {
      title: "2021 Invoice",
      size: "120 MB",
    },
  ];

  const filesArr = [
    {
      title: "All Invoice",
      size: "1.4 MB",
    },
    {
      title: "Bank Stat..",
      size: "1.9 GB",
    },
    {
      title: "vCard – Resume...",
      size: "1.4 MB",
    },
    {
      title: "Project Brief",
      size: "1.4 MB",
    },
    {
      title: "Brand Styles Guide",
      size: "1.4 MB",
    },
  ];

  return (
    <div className="grid grid-cols-6 ">
      {/* left */}
      <div className="col-span-4 space-y-10 border-r border-dark3">
        {/* folders */}
        <div>
          <h3 className="text-2xl font-bold">Folders</h3>

          <div className="flex items-center flex-wrap gap-x-10 gap-y-5 my-6">
            {folderArr.map((folder, index) => (
              <div key={index} className="text-center">
                <FolderIcon />
                <h3 className="text-xl font-semibold ">{folder?.title}</h3>
                <p className="text-dark2">{folder?.size}</p>
              </div>
            ))}

            <div className="border-2 border-dashed border-dark3 w-40 h-40 rounded-lg grid place-items-center">
              <div className="text-center">
                <div className="bg-[#F8F8F8] rounded-lg inline-block p-3">
                  <Plus size={16} />
                </div>
                <p className="text-dark2 font-medium">Add Folder</p>
              </div>
            </div>
          </div>
        </div>

        {/* files */}
        <h3 className="text-2xl font-bold">Files</h3>

        <div className="flex items-center flex-wrap gap-10 my-6">
          {filesArr.map((file, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center space-y-2"
            >
              <FileIcon2 />
              <h3 className="text-xl font-semibold ">{file?.title}</h3>
              <p className="text-dark2">{file?.size}</p>
            </div>
          ))}
        </div>
      </div>

      {/* right */}
      <div className="col-span-2 pt-14 pl-11">
        <div>
          <div className="grid place-items-center">
            <FolderIcon />
            <h3 className="text-2xl font-semibold text-dark2">Projects</h3>
          </div>

          <div className="space-y-5 py-7 border-b border-dark3">
            <p className="font-semibold uppercase">Info</p>

            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Type</p>
              <p>Folder</p>
            </div>
            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Size</p>
              <p>500 MB</p>
            </div>
            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Owner</p>
              <p>BankCo</p>
            </div>
            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Location</p>
              <p>My Files</p>
            </div>
            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Modified</p>
              <p>Sep 17, 2020 4:25</p>
            </div>
            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Created</p>
              <p>Sep 17, 2020 4:25</p>
            </div>
          </div>

          {/* settings */}
          <div className="space-y-5 py-7 ">
            <p className="font-semibold uppercase">Settings</p>

            <div className="flex items-center justify-between font-medium text-dark2">
              <p>File Sharing</p>
              <input type="checkbox" />
            </div>

            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Backup</p>
              <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between font-medium text-dark2">
              <p>Sync</p>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
