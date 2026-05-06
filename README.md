# @ahmnouira/props

Type-safe shared models and reusable props interfaces for TypeScript and React projects.

## ✨ Features

- 🧠 Simple and intuitive
- 🔒 Fully type-safe (TypeScript-first)
- ⚡ Lightweight and dependency-free
- 🔌 Works with Next.js, and any TS project
- 🧩 Reusable props and utilities

`@ahmnouira/props` helps you avoid repeating common prop types (`onClick`, `value`, `loading`, `list`, etc.) and gives you a small set of domain models (`User`, `Role`, `Status`, `Entity`) you can reuse across apps.

## Installation

```bash
npm install @ahmnouira/props
```

## What this library provides

- **Domain models** for application data:
  - `Entity`
  - `User`
  - `Role`
  - `Status`
- **Composable prop types** for React/TS components:
  - Base utility props like `ValueProps<T>`, `ChangeProps<T>`, `ClickProps`, `LoadingProps`, `ListProps<T>`
  - Combined props like `TextClickProps`, `ButtonProps`, `MenuItemsProps`, `FieldProps`, `DialogProps<T>`

## Quick start

```ts
import type {
  User,
  Role,
  Status,
  ValueChangeProps,
  ButtonProps,
  DialogProps,
} from "@ahmnouira/props";

const role: Role = "admin";
const status: Status = "online";

const user: User = {
  id: "u_1",
  role,
  status,
  verified: true,
};

type NameInputProps = ValueChangeProps<string> & {
  label: string;
};

type ConfirmDialogProps = DialogProps<boolean> & ButtonProps;
```

## Commonly used types

### Models

- `Entity`: base entity shape with `id`, optional `createdAt`, optional `updatedAt`
- `User`: extends the user entity with optional metadata such as `role`, `status`, `phone`, `verified`
- `Role`: `"admin" | "user" | "other"`
- `Status`: `"online" | "busy" | "offline" | "all"`

### Core props

- `ValueProps<T>`: `value?: T`
- `ChangeProps<T>`: `onChange?: (value: T) => void`
- `ValueChangeProps<T>`: composition of `ValueProps<T>` + `ChangeProps<T>`
- `ClickProps`: `onClick?: () => void`
- `ListProps<T>`: `list?: T[]`
- `LoadingProps`: `loading?: boolean`

### Composed props examples

- `ButtonProps`: `DisabledProps & TitleProps & ClickProps`
- `TextClickProps`: `TextProps & ClickProps`
- `FieldProps`: `LoadingProps & ErrorsProps & ValueProps & { shake?: boolean; props?: any }`
- `DialogProps<T>`: `CloseProps & { onChange: (value: T) => void; value: T }`

## Example project usage

Check `examples/basic-usage.ts` for a complete typed example that combines:

- shared `User` model
- reusable value/change props
- composed dialog props
- strongly typed list/menu usage

Additional examples:

- `examples/react-example.tsx`: reusable React components typed with this library
- `examples/nextjs-example.tsx`: Next.js page-level example with typed dialog and user model

## Notes

- This package is **type-first** and lightweight.
- It is framework-agnostic but especially useful with React and Next.js component props.
- All exports are available from the package root:

```ts
import type { User, ButtonProps, ValueChangeProps } from "@ahmnouira/props";
```

## License

MIT
