const prompts = [
  {
    title: 'Aurora Ridge Trek',
    prompt:
      'Ultra-realistic cinematic portrait of a confident 23-year-old man standing on a snow-dusted ridge in the Scandinavian fjords at blue hour, emerald aurora swirling overhead, wearing a matte charcoal technical parka and orange beanie, snowflakes caught in his trimmed beard, captured on a Sony Alpha 7R V with 85mm prime lens, f/1.8, bokeh city lights in the distant valley.'
  },
  {
    title: 'Himalayan Dawn Ascent',
    prompt:
      'Wide-angle sunrise scene of a 23-year-old mountaineer climbing a frosted granite slope in the Eastern Himalayas, sunlight igniting the snow peaks with golden hues, crisp vapor around his breath, lightweight cobalt blue shell jacket, crampons biting into ice, drone photography with subtle motion blur and volumetric mist.'
  },
  {
    title: 'Alpine Basecamp Prep',
    prompt:
      'Documentary-style image of a fit 23-year-old man adjusting his snowboard beside a minimalist alpine hut in Zermatt during a gentle snowfall, soft overcast lighting, retro analog film grain, muted teal and amber color palette, panoramic Swiss Alps backdrop, depth of field focused on his determined expression.'
  },
  {
    title: 'Nordic Snowfield Run',
    prompt:
      'Dynamic action shot of a 23-year-old trail runner sprinting across rolling Arctic snowfields near Tromsø, wearing breathable layered gear in slate gray and neon lime, crisp sparkling snow kicking up behind him, frozen fjord glistening in background, high shutter speed sports photography, subtle lens flare.'
  },
  {
    title: 'Canadian Chalet Reflection',
    prompt:
      'Warm twilight portrait of a relaxed 23-year-old man seated on a wooden deck overlooking the snowy Banff mountains, reflective lake mirroring the peaks, ember glow from nearby fire pit lighting his face, cozy wool sweater and leather boots, Hasselblad medium format clarity, cinematic color grading.'
  },
  {
    title: 'Kashmir Powder Descent',
    prompt:
      'High-energy third-person shot of a 23-year-old skier carving through untouched powder in Gulmarg, snow plume curling around him, vibrant crimson ski jacket contrasting cobalt sky, GoPro-style dynamic perspective, motion trails emphasizing speed, distant cedar forests softened by falling snow.'
  },
  {
    title: 'Patagonian Glacier Scout',
    prompt:
      'Epic landscape with a solitary 23-year-old explorer surveying a jagged Patagonian glacier from a rocky outcrop, wind tousling his dark hair, reflective glacier lake below, storm clouds parting for a ray of light, captured with Leica Q3, rich teal and slate color tones, subtle cinematic vignetting.'
  },
  {
    title: 'Japanese Alps Onsen Steam',
    prompt:
      'Atmospheric evening scene of a calm 23-year-old man soaking in an outdoor onsen overlooking the snow-laden Japanese Alps, rising steam mingling with falling snow, lanterns casting warm light on his relaxed expression, minimalist composition, Fujifilm Pro 400H film emulation, poetic mood.'
  },
  {
    title: 'Icelandic Ice Cave Glow',
    prompt:
      'Surreal portrait of a 23-year-old adventurer walking through a crystal blue ice cave in Iceland, bioluminescent-inspired LED panels attached to his backpack illuminating icy textures, wide-angle lens emphasizing cavern scale, fine snow dust suspended in the air, futuristic expedition vibe.'
  },
  {
    title: 'Rockies Summit Selfie',
    prompt:
      'Modern social media-ready selfie of a 23-year-old man at the peak of a snowcapped Colorado mountain, mirrorless camera held at arm’s length, reflective goggles up on his head, panoramic ridge lines behind him under clear winter sky, crisp HDR rendering, subtle lens distortion for immersive feel.'
  }
];

export default function Page() {
  return (
    <main>
      <header>
        <h1>Hilly Snowfall AI Prompts</h1>
        <p className="description">
          Ten vivid generative art prompts capturing a 23-year-old adventurer across breathtaking winter landscapes.
        </p>
      </header>

      <section className="grid" aria-label="AI image prompts">
        {prompts.map((prompt, index) => (
          <article key={prompt.title} className="card">
            <div className="prompt-title">
              {String(index + 1).padStart(2, '0')}. {prompt.title}
            </div>
            <div className="prompt-body">{prompt.prompt}</div>
          </article>
        ))}
      </section>

      <footer className="footer">
        Crafted for a 23-year-old explorer seeking snowy, hilly adventures.
      </footer>
    </main>
  );
}
