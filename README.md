# cursed-dropkit-squad

Dropkit package for a multi-role engineering squad with specialized agents for implementation, design, research, PR writing, and QA.

## Included squad roles

- `squad_intern`: Junior implementation role for low-risk, bounded tasks.
- `squad_developer`: Senior implementation role for complex or ambiguous work.
- `squad_designer`: UI/TUI design and critique specialist.
- `squad_researcher`: Inspection-first explorer/research role.
- `squad_pr`: Large-context summarization and wording specialist.
- `squad_qa`: Testing and code-quality specialist.

## Included orchestration skills

- `team_lead`: role routing and execution orchestration.
- `squad_intern`, `squad_developer`, `squad_designer`, `squad_researcher`, `squad_pr`, `squad_qa`: role-specific delegation helpers.

## File tree

```text
.
├── index.ts
├── plugin.ts
├── files/
│   ├── agent/
│   │   ├── squad_developer.md
│   │   ├── squad_designer.md
│   │   ├── squad_intern.md
│   │   ├── squad_pr.md
│   │   ├── squad_qa.md
│   │   └── squad_researcher.md
│   ├── command/
│   │   └── squad_route.md
│   └── skills/
│       ├── squad_developer/SKILL.md
│       ├── squad_designer/SKILL.md
│       ├── squad_intern/SKILL.md
│       ├── squad_pr/SKILL.md
│       ├── squad_qa/SKILL.md
│       ├── squad_researcher/SKILL.md
│       └── team_lead/SKILL.md
├── scripts/
│   ├── build.sh.ts
│   ├── check.sh.ts
│   ├── check_manifest.sh.ts
│   ├── ci.sh.ts
│   ├── npm_publish_dry_run.sh.ts
│   ├── smoke_import.sh.ts
│   ├── test.sh.ts
│   ├── version.sh.ts
│   └── helpers/
│       ├── run_command.sh.ts
│       └── run_root.sh.ts
├── package.json
└── README.md
```

## Install

```bash
npm install
```

## Scripts

- `bun run check`
- `bun run test`
- `bun run build`
- `bun run ci`
- `bun run version:set -- 0.1.1`
- `bun run publish:npm:dry-run`

## Use in OpenCode plugin config

```ts
import { createSquadDropkitPlugin } from "@cursed-factory/dropkit-squad";

export const SquadPlugin = createSquadDropkitPlugin({
  service: "dropkit-squad",
  namespace: "dropkit-squad",
});
```

Then register that plugin in your `opencode.json` plugin list.

## Recommended flow

1. Use `squad_route` + `team_lead` to split larger requests.
2. Delegate focused work to the right role agent.
3. Keep tasks small to control context and cost.
4. Run `bun run ci` before publish.
