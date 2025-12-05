import { Card, Divider, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SideBar = () => {
  return (
    <>
      <Card
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          height: '300px',
          borderRadius: "15px",
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        }}
      >
        <Typography style={{ fontSize: "24px", fontWeight: 500 }}>
          Profile Info of a user
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Stack direction="column" justifyContent="center" alignItems="center">
          <AccountCircleIcon style={{ fontSize: "150px " }} />
          <Typography style={{ fontSize: "20px", fontWeight: 500 }}>Sandeep</Typography>
          <Typography style={{ fontSize: "14px", fontWeight: 400 }}>Software Enginner</Typography>
        </Stack>
      </Card>
    </>
  );
};

export default SideBar;
