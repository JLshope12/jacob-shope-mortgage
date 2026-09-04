type NumberFieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
};

export function NumberField({ id, label, value, onChange, min = 0, max, step = 1, prefix, suffix }: NumberFieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-charcoal">{label}</span>
      <span className="mt-2 flex items-center rounded-lg border border-charcoal/20 bg-white px-3 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20">
        {prefix ? <span className="text-charcoal/60">{prefix}</span> : null}
        <input
          id={id}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(Number(event.target.value) || 0)}
          className="min-w-0 flex-1 bg-transparent px-2 py-3 text-charcoal outline-none"
        />
        {suffix ? <span className="text-charcoal/60">{suffix}</span> : null}
      </span>
    </label>
  );
}
