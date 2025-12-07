import React from "react";
import myPic from "./Assets/Vinit.jpeg";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  Link,
} from "@mui/material";

import "./App.css"; // For smooth scroll behavior

// Smooth Scroll CSS
// In App.css add: html { scroll-behavior: smooth; }

function App() {
  return (
    <Box sx={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#fff" }}>
      {/* NAVBAR */}
      <AppBar position="fixed" sx={{ backgroundColor: "#1e293b" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "1.4rem", fontWeight: 700 }}>
            Vinit Kumar
          </Typography>

          <Box>
            <Button color="inherit" href="#home">
              Home
            </Button>
            <Button color="inherit" href="#about">
              About
            </Button>
            <Button color="inherit" href="#skills">
              Skills
            </Button>
            <Button color="inherit" href="#experience">
              Experience
            </Button>
            <Button color="inherit" href="#projects">
              Projects
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
            <Button
              color="inherit"
              href="https://github.com/yourgithub"
              target="_blank"
            >
              GitHub
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* HOME (Spacing Fix) */}
      <Box id="home" sx={{ height: "70px" }} />

      {/* ABOUT SECTION */}
      <Container id="about" sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 5,
          }}
        >
          {/* Left - Image */}
          <Box
            component="img"
            src={myPic}
            alt="profile"
            sx={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #334155",
              boxShadow: "0 0 25px rgba(255,255,255,0.15)",
            }}
          />

          {/* Right - Text */}
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 2, color: "#38bdf8" }}
            >
              About Me
            </Typography>

            <Typography sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
              I am a passionate developer who builds modern applications with
              ReactJS, .NET Core, Blazor Server and Cloud technologies. I love
              solving problems and creating clean, responsive UI.
            </Typography>

            <Typography
              sx={{ mt: 2, fontSize: "1rem", opacity: 0.9, lineHeight: 1.8 }}
            >
              <b>Full Stack Developer</b>  
              <br />
              ReactJS • .NET • Blazor • Cloud • Hosting • CMS • Problem Solver
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="info"
                href="YOUR_CV_LINK.pdf"
                target="_blank"
              >
                Download CV
              </Button>

              <Button
                variant="outlined"
                color="info"
                href="https://github.com/kamyabVK"
                target="_blank"
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* SKILLS */}
      <Container id="skills" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700, mb: 5, color: "#38bdf8" }}
        >
          Technical Skills
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {[
            {
              title: "Frontend Development",
              desc: "ReactJS, HTML, CSS, JavaScript, UI Design",
            },
            {
              title: "Backend & Cloud",
              desc: ".NET Core, APIs, SQL, Cloud Services",
            },
            {
              title: "Tools & Workflow",
              desc: "Git, Hosting, CMS, Problem Solving",
            },
          ].map((skill, i) => (
            <Card
              key={i}
              sx={{
                p: 2,
                background: "#d9dbdfff",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                borderRadius: "18px",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: "#38bdf8", mb: 1 }}>
                  {skill.title}
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>{skill.desc}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* EXPERIENCE */}
      <Container id="experience" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700, mb: 5, color: "#38bdf8" }}
        >
          Work Experience
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            {
              role: "Full Stack Developer Intern",
              company: "Tech Company",
              date: "2024 - Present",
              points: ["ReactJS UI", ".NET API work", "Database handling"],
            },
            {
              role: "Web Designer",
              company: "Freelance",
              date: "2023 - 2024",
              points: ["UI/UX", "Hosting", "CMS Setup"],
            },
          ].map((exp, i) => (
            <Card
              key={i}
              sx={{
                p: 3,
                background: "#d9dbdfff",
                boxShadow: "0 0 25px rgba(0,0,0,0.4)",
                borderRadius: "18px",
              }}
            >
              <Typography variant="h6" sx={{ color: "#38bdf8" }}>
                {exp.role}
              </Typography>
              <Typography sx={{ opacity: 0.8 }}>{exp.company}</Typography>
              <Typography sx={{ opacity: 0.6, mb: 2 }}>{exp.date}</Typography>

              <ul>
                {exp.points.map((p, j) => (
                  <li key={j} style={{ opacity: 0.8, marginBottom: "6px" }}>
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Box>
      </Container>

      {/* PROJECTS */}
      <Container id="projects" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700, mb: 5, color: "#38bdf8" }}
        >
          Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          {[
            {
              name: "ReactJS Food Delivery Website",
              pts: [
                "UI built using ReactJS",
                "Product listing",
                "Cart system",
                "Responsive & clean",
              ],
            },
            {
              name: "Store Management System (.NET + Blazor)",
              pts: [
                "Add/Edit/Delete items",
                "Blazor UI",
                "SQL database",
                "Role-based access",
              ],
            },
            {
              name: "Data Analysis Project",
              pts: [
                "Analytics dashboard",
                "Charts & insights",
                "CSV automation",
                "Predictive patterns",
              ],
            },
            {
              name: "N8N Automation Flow",
              pts: [
                "Automated workflows",
                "AI Integration",
                "Email triggers",
                "Fully automated pipeline",
              ],
            },
          ].map((pr, i) => (
            <Card
              key={i}
              sx={{
                p: 2,
                background: "#d9dbdfff",
                height: "100%",
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                borderRadius: "18px",
              }}
            >
              <Typography variant="h6" sx={{ color: "#38bdf8", mb: 1 }}>
                {pr.name}
              </Typography>

              <ul>
                {pr.pts.map((p, j) => (
                  <li key={j} style={{ opacity: 0.8, marginBottom: "6px" }}>
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Box>
      </Container>

      {/* CONTACT FORM */}
      <Container id="contact" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700, mb: 5, color: "#38bdf8" }}
        >
          Contact Me
        </Typography>

        <Card
          sx={{
            p: 4,
            maxWidth: "550px",
            margin: "auto",
            background: "#1e293b",
            boxShadow: "0 0 25px #d9dbdfff",
            borderRadius: "18px",
          }}
        >
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            sx={{ mb: 2, input: { color: "#fff" }, label: { color: "#ccc" } }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2, input: { color: "#fff" }, label: { color: "#ccc" } }}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            sx={{ mb: 2, input: { color: "#fff" }, label: { color: "#ccc" } }}
          />

          <Button variant="contained" color="info" fullWidth>
            Send Message
          </Button>
        </Card>
      </Container>

      {/* FOOTER */}
      <Box
        sx={{
          py: 3,
          textAlign: "center",
          background: "#1e293b",
          borderTop: "1px solid #334155",
        }}
      >
        <Typography>© 2025 Vinit Kumar</Typography>

        <Box sx={{ mt: 1 }}>
          <Link
            href="https://github.com/yourgithub"
            target="_blank"
            underline="hover"
            sx={{ color: "#38bdf8", mx: 1 }}
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            underline="hover"
            sx={{ color: "#38bdf8", mx: 1 }}
          >
            LinkedIn
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            underline="hover"
            sx={{ color: "#38bdf8", mx: 1 }}
          >
            Twitter
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
