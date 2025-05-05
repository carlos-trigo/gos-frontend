import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { JSX } from "react";
interface ResizablePanelsProps {
  left: JSX.Element;
  topRight: JSX.Element;
  bottomRight: JSX.Element;
}
export const ResizablePanels = ({
  left,
  topRight,
  bottomRight,
}: ResizablePanelsProps) => (
  <div className="w-full px-8">
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-full rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-96 items-center justify-center p-6 pt-2">
          {left}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              {topRight}
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 pt-2">
              {bottomRight}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
);
