import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageDraw, ImageFont

def generate_heraldry():
    ecu = ecu_entry.get()
    couronne = couronne_entry.get()
    portants = portants_entry.get()
    devise = devise_entry.get()

    # Charger une image de base (à remplacer par le chemin de ton image)
    base_image = Image.new('RGB', (400, 400), color = (255, 255, 255))
    draw = ImageDraw.Draw(base_image)

    # Ajouter des éléments héraldiques (exemple simplifié)
    draw.text((10, 10), ecu, fill="black")
    draw.text((10, 50), couronne, fill="black")
    draw.text((10, 90), portants, fill="black")
    draw.text((10, 130), devise, fill="black")

    # Afficher l'image générée
    base_image.show()

# Créer la fenêtre principale
root = tk.Tk()
root.title("Générateur d'Armoiries Héraldiques")

# Partie pour l'écu
ttk.Label(root, text="Description de l'écu:").grid(column=0, row=0, padx=10, pady=5)
ecu_entry = ttk.Entry(root, width=50)
ecu_entry.grid(column=1, row=0, padx=10, pady=5)

# Partie pour la couronne
ttk.Label(root, text="Description de la couronne:").grid(column=0, row=1, padx=10, pady=5)
couronne_entry = ttk.Entry(root, width=50)
couronne_entry.grid(column=1, row=1, padx=10, pady=5)

# Partie pour les portants
ttk.Label(root, text="Description des portants:").grid(column=0, row=2, padx=10, pady=5)
portants_entry = ttk.Entry(root, width=50)
portants_entry.grid(column=1, row=2, padx=10, pady=5)

# Partie pour la devise
ttk.Label(root, text="Devise:").grid(column=0, row=3, padx=10, pady=5)
devise_entry = ttk.Entry(root, width=50)
devise_entry.grid(column=1, row=3, padx=10, pady=5)

# Bouton pour générer l'armoirie
generate_button = ttk.Button(root, text="Générer l'armoirie", command=generate_heraldry)
generate_button.grid(column=0, row=4, columnspan=2, pady=10)

root.mainloop()
