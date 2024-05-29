export async function getUser() {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
    userAgent: "gh-api/v0.0.1",
    timeZone: "America/Chicago",
  });
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);

}
