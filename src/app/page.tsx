import Image from "next/image";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

export default async function Home() {
  const owner = "spruceid";
  const repos = ["didkit"];
  const MyOctokit = Octokit.plugin(restEndpointMethods);

  const octokit = new MyOctokit({
    auth: process.env.GH_TOKEN,
    userAgent: "gh-api/v0.0.1",
    timeZone: "America/Chicago",
  });
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  const communityProfile = await octokit.rest.repos.getCommunityProfileMetrics({
    owner,
    repo: repos[0],
  });

  const forks = await octokit.rest.repos.listForks({
    owner,
    repo: repos[0],
    sort: "stargazers"
  });

  // await octokit.rest..create({
  //   owner: "octocat",
  //   repo: "hello-world",
  //   title: "Hello, world!",
  //   body: "I created this issue using Octokit!",
  // });

  return (
    <Container maxWidth={false}>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid xs={12}>
          <Typography variant="h1">Using the GitHub API</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h3">DIDKit</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6">Forks</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography
            variant="body1"
            component="pre"
          >
            {JSON.stringify(forks.data, undefined, 2)}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6">Community Profile Metrics</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography
            variant="body1"
            component="pre"
          >
            {JSON.stringify(communityProfile.data, undefined, 2)}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
