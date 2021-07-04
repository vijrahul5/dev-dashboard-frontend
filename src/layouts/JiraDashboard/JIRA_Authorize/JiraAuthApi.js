const JiraAuthApi = () => {
  async function getCloudId(URL, ACCESS_TOKEN) {
    let data = await fetch(URL, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      method: "GET",
    });
    console.log(data);
    let dataJSON = await data.json();
    console.log(dataJSON);

    let CLOUD_ID = dataJSON[0].id;
    return CLOUD_ID;
  }
  async function getRefreshAndAccessCode(
    URL,
    client_id,
    client_secret,
    AUTH_CODE,
    redirect_uri
  ) {
    let data = await fetch(URL, {
      body: JSON.stringify({
        grant_type: "authorization_code",
        client_id: client_id,
        client_secret: client_secret,
        code: AUTH_CODE,
        redirect_uri: redirect_uri,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    let dataJSON = await data.json();
    let REFRESH_TOKEN = dataJSON.refresh_token;
    let ACCESS_TOKEN = dataJSON.access_token;
    return [REFRESH_TOKEN, ACCESS_TOKEN];
  }

  return { getCloudId, getRefreshAndAccessCode };
};

export default JiraAuthApi;
