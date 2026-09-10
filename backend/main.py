from fastapi import FastAPI
app = FastAPI()

# ------- Task 1 -------

def predict_price(area: float, bedrooms: int, location: str) -> float:
    price = 500_000_000

    price += area * 15_000_000
    price += bedrooms * 50_000_000

    if location.lower() == "hanoi":
        price *= 1.3
    elif location.lower() == "hcmc":
        price *= 1.25
    else:
        price *= 1

    price = round(price / 1_000_000) * 1_000_000

    return float(price)

# ------- Task 2 -------
@app.get("/predict")
def predict(area: float, bedrooms: int, location: str = "other"):
    price = predict_price(area, bedrooms, location)

    return {
        "area": area,
        "bedrooms": bedrooms,
        "location": location,
        "predicted_price": price
    }

# ------- Task 4 -------
from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory="../frontend"), name="static")