import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { paths } from "@/routes/paths";

import { useLocation, useNavigate } from "react-router";

export const Breadcrum = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const friendBreadcrumb = (
    <Breadcrumb>
      <div className="h-full flex justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate(paths.home)}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate(paths.friends)}>
              Friends
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </div>
    </Breadcrumb>
  );
  const gamesBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => navigate(paths.home)}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => navigate(paths.friends)}>
            Games
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );

  if (location.pathname === paths.friends) return <>{friendBreadcrumb}</>;
  if (location.pathname === paths.game) return <>{gamesBreadcrumb}</>;
  return <></>;
};
