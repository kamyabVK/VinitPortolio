import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  TextField,
  TextareaAutosize
} from "@mui/material";

export default function App() {
  return (
    <Box sx={{ background: "#0f172a", color: "white", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <AppBar position="sticky" sx={{ background: "#0f172a", paddingY: 1 }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1, fontSize: 22, fontWeight: "bold" }}>
            Vinit Kumar
          </Typography>

          {['Home', 'About', 'Projects', 'Contact'].map(txt => (
            <Button key={txt} href={`#${txt.toLowerCase()}`} sx={{ color: "white", marginLeft: 2 }}>
              {txt}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* HERO / ABOUT */}
      <Box id="about" sx={{ padding: "80px 20px", display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "center", gap: 5, alignItems: 'center' }}>
        <img
          src="Vinit_kumar.jpeg"
          alt="me"
          style={{ borderRadius: 12, width: '100%', maxWidth: 250, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        />

        <Box sx={{ maxWidth: 480 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            About Me
          </Typography>
          <Typography sx={{ opacity: 0.9, lineHeight: 1.8, mb: 2 }}>
            Full Stack Developer<br />
            ReactJS • .NET • Blazor • Cloud • Hosting • CMS • Problem Solver
          </Typography>
          <Typography sx={{ opacity: 0.9, lineHeight: 1.8 }}>
            I build modern applications using ReactJS, .NET Core, Blazor Server and Cloud technologies. I focus on problem-solving, clean responsive UI and real-world scalable implementations.
          </Typography>

          <Box sx={{ marginTop: 3, display: "flex", gap: 2, flexWrap: 'wrap' }}>
            <Button variant="outlined" sx={{ borderColor: "white", color: "white" }}>
              Download CV
            </Button>

            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline", fontSize: 16, marginTop: 8 }}>
              GitHub
            </a>
          </Box>
        </Box>
      </Box>

      {/* PROJECTS */}
      <Box id="projects" sx={{ padding: "80px 20px" }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}>
          Projects
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(2,1fr)' }, gap: 4 }}>
          <Card sx={{ background: "#1e293b", color: "white", padding: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>ReactJS Food Delivery Website</Typography>
              <ul>
                <li>Responsive UI with Material UI</li>
                <li>Order management and cart system</li>
                <li>Reusable components</li>
                <li>API integration for food data</li>
              </ul>
            </CardContent>
          </Card>

          <Card sx={{ background: "#1e293b", color: "white", padding: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Blazor + .NET Store Management System</Typography>
              <ul>
                <li>Inventory management</li>
                <li>Billing & invoicing</li>
                <li>Secure backend with .NET</li>
                <li>Blazor server UI</li>
              </ul>
            </CardContent>
          </Card>

          <Card sx={{ background: "#1e293b", color: "white", padding: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Sales Data Analysis Dashboard</Typography>
              <ul>
                <li>Data visualization with charts</li>
                <li>Insightful reports for decision making</li>
                <li>Data cleaning and transformation</li>
                <li>Interactive UI components</li>
              </ul>
            </CardContent>
          </Card>

          <Card sx={{ background: "#1e293b", color: "white", padding: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>AI Workflow Automation (n8n)</Typography>
              <ul>
                <li>Automated data collection</li>
                <li>AI summarization pipelines</li>
                <li>Email & notification workflows</li>
                <li>Integration with multiple APIs</li>
              </ul>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* CONTACT */}
      <Box id="contact" sx={{ padding: "80px 20px", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>Contact Me</Typography>

        <Box component="form" sx={{ maxWidth: 600, margin: '0 auto', display: 'grid', gap: 3, background: '#1e293b', padding: 4, borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          <TextField fullWidth label="Your Name" variant="outlined" sx={{ background: 'white', borderRadius: 1 }}/>
          <TextField fullWidth label="Your Email" variant="outlined" sx={{ background: 'white', borderRadius: 1 }}/>
          <TextField fullWidth label="Message" variant="outlined" multiline rows={5} sx={{ background: 'white', borderRadius: 1 }}/>
          <Button variant="contained" sx={{ background: '#3b82f6', color: 'white', '&:hover': { background: '#2563eb' } }}>Send Message</Button>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ background: "#1e293b", padding: 3, textAlign: "center", mt: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: 'wrap' }}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>Twitter</a>
        </Box>
        <Typography sx={{ marginTop: 1, fontSize: 14, opacity: 0.7 }}>© 2025 Vinit Kumar. All Rights Reserved.</Typography>
      </Box>

    </Box>
  );
}
