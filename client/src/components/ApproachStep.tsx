interface ApproachStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ApproachStep({ number, title, description, isLast }: ApproachStepProps) {
  return (
    <div className="flex gap-6 md:gap-8" data-testid={`step-${number}`}>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold" data-testid="step-number">
          {number}
        </div>
        {!isLast && <div className="w-0.5 h-24 bg-border mt-4" />}
      </div>
      <div className="pb-16">
        <h3 className="text-2xl font-bold mb-3" data-testid="text-step-title">{title}</h3>
        <p className="text-muted-foreground leading-relaxed" data-testid="text-step-description">{description}</p>
      </div>
    </div>
  );
}
