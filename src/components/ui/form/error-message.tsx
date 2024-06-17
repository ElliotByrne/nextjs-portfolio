export function ErrorMessage({
  errors,
  label,
}: {
  errors?: string[] | string;
  label: string;
}) {
  if (!errors || errors?.length < 1) {
    return null;
  }

  let errorState;

  if (typeof errors === 'string') {
    errorState = [errors];
  } else {
    errorState = errors;
  }

  return (
    <div id={`${label}-error`} aria-live="polite" aria-atomic="true">
      {errorState &&
        errorState.length > 0 &&
        errorState?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
}
