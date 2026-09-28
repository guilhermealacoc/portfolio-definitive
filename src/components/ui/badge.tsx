import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../../lib/utils";

type BadgeVariant = "default" | "outline" | "muted";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "ui-badge--default",
  outline: "ui-badge--outline",
  muted: "ui-badge--muted",
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <div ref={ref} className={cn("ui-badge", variantClasses[variant], className)} {...props} />;
  }
);

Badge.displayName = "Badge";
