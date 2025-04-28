import { Auth0Provider } from "@auth0/auth0-react";
import React, { JSX, PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import {
  AUTH0_AUDIENCE,
  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
} from "../constants";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

export const Auth0 = ({
  children,
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null => {
  const domain = AUTH0_DOMAIN;
  const clientId = AUTH0_CLIENT_ID;
  const redirectUri = AUTH0_CALLBACK_URL;
  const audience = AUTH0_AUDIENCE;
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  if (!(domain && clientId && redirectUri && audience)) {
    console.error("Unable to configure Auth0: missing envs");
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
