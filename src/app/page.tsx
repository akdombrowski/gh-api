import Image from "next/image";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Octokit, App } from "octokit";

export default function Home() {
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
      </Grid>
    </Container>
  );
}
