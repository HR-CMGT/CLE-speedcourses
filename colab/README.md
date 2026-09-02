# Colab Stable Diffusion

Code voorbeeld voor TLE workshop: AI Image Generation.

- Log in op [google colab](https://colab.google.com)
- Maak een ***new notebook***
- ⚠️ Zet de *runtime* op **GPU of T4 GPU**
- Kopieer handmatig onderstaande code cellen één voor één naar je colab. Klik op play na elke cel.
- Of IMPORTEER rechtstreeks het hele [ai_image_generation.ipynb](./ai_image_generation.ipynb) notebook naar colab!

<br><br><br>

<img width="450" height="442" alt="gpu" src="https://github.com/user-attachments/assets/7a2ce2a4-17ab-4ad5-9716-ac456b328eb9" />

<br><br><br>

## Code Cellen

CEL 1

Controleer of de CUDA GPU beschikbaar is. Je ziet hier ook hoeveel RAM beschikbaar is (16GB).

```python
!nvidia-smi
```

CEL 2

Installeer de [huggingface](https://huggingface.co/models?pipeline_tag=text-to-image&sort=trending) library voor het downloaden van modellen.

```python
!pip install -q -U diffusers transformers accelerate
```

CEL 3

Deze cel installeert Stable Diffusion XL fp16. Klik "grant access" als er om toestemming wordt gevraagd. Het model moet geschikt zijn voor de GPU met 16GB RAM. Om te leren hoe alles werkt gebruiken we hier een wat ouder model. [Meer modellen op HuggingFace](https://huggingface.co/models?pipeline_tag=text-to-image&sort=trending)

```python
import torch
from diffusers import AutoPipelineForText2Image

pipe = AutoPipelineForText2Image.from_pretrained(
    "stabilityai/sdxl-turbo",
    torch_dtype=torch.float16,
    variant="fp16"
)

pipe = pipe.to("cuda")
```

CEL 4

Als het downloaden is gelukt, kan je een prompt gaan uitvoeren!

```python
prompt = "A broken robot standing in the rainy streets of neon tokyo"

image = pipe(
    prompt=prompt,
    num_inference_steps=4,
    guidance_scale=0.0
).images[0]

display(image)
```

<br><bR><br>

### Next Steps

- Probeer verschillende prompts, vraag de Gemini assistent om je prompt aan te passen zodat het goed werkt met Stable Diffusion SDXL.
- Vraag de Gemini assistent om uitleg en suggesties.
- Als er iets helemaal mis gaat kan je het hele notebook restarten met ***Runtime > Restart Session***. Klik daarna één voor één op de *play* buttons van elke cel. Wacht tot een cel klaar is voordat je op de volgende klikt.

<br><br><br>

### Beter Model

Vraag AI om een beter model te laden en de code daarop aan te passen. Let op dat het model niet groter kan zijn dan 8 ~ 10GB. Let op dat de AI snapt dat je in een gratis colab notebook werkt. Hieronder een voorbeeld voor ***Juggernaut-XL-v9***.

```python
import torch
from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained(
    "RunDiffusion/Juggernaut-XL-v9",
    torch_dtype=torch.float16,
    variant="fp16",
    use_safetensors=True
).to("cuda")
```

<br><br><br>
