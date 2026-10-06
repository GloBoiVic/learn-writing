# Deliberate Prose Course

Open `OPEN-COURSE.command` to start the local course server and open Lesson 1 in your browser. This is the supported way to view the course: it ensures the shared stylesheet and other reusable assets load consistently.

The course map is available at `http://127.0.0.1:8765/COURSE-MAP.html` while the launcher is running.

## Workspace layout

- `lessons/`, `reference/`, `assets/`, and `learning-records/` are the persistent Teach course materials.
- `source-material/` contains the original writing samples used for course customization. It is organized into personal emails, admired writing, and submitted grants.
- `tools/build-course.mjs` is the course generator. It produces the 16-lesson knowledge phase, course map, and reference sheets; make durable course-content changes there, then run `node tools/build-course.mjs` from the workspace root.

## Course phases

The current course is knowledge-first by design. It provides the concepts, decision rules, worked comparisons, voice framework, and grant-writing architecture needed before practice. It has no quizzes, gates, or required retrieval.

After Lesson 16, tell the teaching agent that you are ready for practice. That phase will use authentic personal, professional, and grant writing with feedback and revision.
