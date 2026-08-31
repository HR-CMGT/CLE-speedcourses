# Colab Stable Diffusion

Code voorbeeld voor TLE workshop: AI Image Generation.

- Log in op [google colab](https://colab.google.com)
- Maak een ***new notebook***
- ⚠️ Zet de *runtime* op **GPU of T4 GPU**
- Kopieer handmatig onderstaande code cellen één voor één naar je colab. Klik op play na elke cel.
- Of IMPORTEER rechtstreeks het hele [ai_image_generation.ipynb](./ai_image_generation.ipynb) notebook naar colab!
- De code downloadt Stable Diffusion XL FP16, dit model is 7GB groot. 

<br><br><br>

<img width="450" height="442" alt="gpu" src="https://github.com/user-attachments/assets/7a2ce2a4-17ab-4ad5-9716-ac456b328eb9" />

<br><br><br>

## Code Cellen

CEL 1

```python
!nvidia-smi
```

CEL 2

```python
!pip install -q -U diffusers transformers accelerate
```

CEL 3

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

```python
prompt = "A broken robot standing in the rainy streets of neon tokyo"

image = pipe(
    prompt=prompt,
    num_inference_steps=4,
    guidance_scale=0.0
).images[0]

display(image)
```

Experimenteer met de prompt en het aantal `inference_steps`!
