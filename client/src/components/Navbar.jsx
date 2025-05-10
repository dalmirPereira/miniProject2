
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  TextField, 
  Button,
  Box 
} from "@mui/material";

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const Navbar = ({ searchTask, handleSearchTask , applySearchTask }) => {

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          py: 2,
          px: 3,
        }}
      >
        
        {/* Title with Icon (Totem-like branding) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AssignmentTurnedInIcon sx={{ fontSize: 30 }} />
          <Typography variant="h6" component="div">
            To Do List
          </Typography>
        </Box>

        {/* Search and Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search tasks..."
            value={searchTask}
            onChange={(e) => handleSearchTask(e.target.value)}
            sx={{ width: 200 }}
          />

          <Button 
            color="inherit" 
            variant="outlined"
            onClick={applySearchTask}
          >
            Search
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;