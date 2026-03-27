import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { resume, projects } from "@/data/data";

export const metadata = {
  title: "Resume - Ngen Tina | Data Science Portfolio",
  description:
    "Academic background, technical skills, and experience in data science and analytics.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ngen Tina</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Data Science Major & Analytics Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Phnom Penh, Cambodia
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Available for Internships
            </div>
          </div>
          <Button className="mb-8">
            <a href="/api/download-resume" download>
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resume.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                <p className="text-sm font-medium mb-2">GPA: {edu.gpa}</p>
                {edu.coursework && (
                  <div className="mb-2">
                    <p className="text-sm font-medium mb-1">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {edu.coursework.map((course) => (
                        <Badge
                          key={course}
                          variant="secondary"
                          className="text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {edu.achievements && (
                  <div>
                    <p className="text-sm font-medium mb-1">Achievements:</p>
                    <div className="flex flex-wrap gap-1">
                      {edu.achievements.map((achievement) => (
                        <Badge
                          key={achievement}
                          variant="outline"
                          className="text-xs"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Social Activities and Volunteerings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              Social Activities & Volunteering
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resume.socialActivitiesAndVolunteering.map((activity, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{activity.title}</h3>
                    <p className="text-muted-foreground">
                      {activity.organization}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <p>{activity.period}</p>
                    <p>{activity.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {activity.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resume.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(resume.technicalSkills).map(
              ([category, skills]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            )}
          </CardContent>
        </Card>

        {/* Key Projects */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Key Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-muted-foreground mb-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2">
              {resume.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
