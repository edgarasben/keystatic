const features = [
  'First-class CMS experience',
  'Visually edit Markdoc & components',
  'TypeScript API, no database',
  'Integrates with Astro, Remix and Next.js',
];

export default function Features() {
  return (
    <ul className="mx-auto max-w-xl space-y-6 rounded-2xl bg-white p-8 text-xl leading-none lg:col-span-6 lg:col-start-8 lg:max-w-none">
      {features.map(feature => (
        <li key={feature} className="flex items-center gap-4">
          <svg
            className="w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 19"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M12.737.879c.432.007.843.097 1.234.27a.65.65 0 0 0 .369.492.64.64 0 0 1-.032.427 7.283 7.283 0 0 1-.787 1.658 35.621 35.621 0 0 0-3.189 5.197 93.757 93.757 0 0 0 4.542-.592c.69.096 1.066.482 1.13 1.157-.057.377-.271.611-.642.703-1.73.25-3.465.455-5.207.614A.327.327 0 0 0 10 10.9a48.017 48.017 0 0 0 4.902 4.477c.299.336.98.484.885.995-.051.273-.302.366-.412.578-.67.198-1.3.092-1.893-.32a88.354 88.354 0 0 1-5.033-4.701 38.147 38.147 0 0 0-1.138 1.917 30.24 30.24 0 0 1-2.465 4.393 1.063 1.063 0 0 1-.786.156 7.004 7.004 0 0 1-1.008-.325c-.25-.237-.315-.516-.196-.837a18.657 18.657 0 0 0 2.617-4.453c.295-.553.617-1.089.968-1.608-1.594.207-3.195.41-4.801.607a2.657 2.657 0 0 1-1.346-.743c-.156-.38-.071-.695.255-.947 1.464-.208 2.93-.409 4.395-.602.433-.089.859-.188 1.276-.298a103.558 103.558 0 0 0-3.783-5.144c-.509-.75-.316-1.2.58-1.352.373-.031.71.066 1.01.29 1.317 1.86 2.641 3.71 3.974 5.552a212.906 212.906 0 0 1 3.357-5.471c.362-.587.654-1.21.876-1.865.162-.127.33-.234.503-.32Z"
              clipRule="evenodd"
              opacity=".953"
            />
          </svg>
          <span className="text-keystatic-gray-dark">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
