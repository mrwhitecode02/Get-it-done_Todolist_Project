# Generated by Django 5.0.2 on 2024-02-28 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="homepage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("firtsname", models.CharField(max_length=255)),
                ("lastname", models.CharField(max_length=255)),
                ("nickname", models.CharField(max_length=255)),
            ],
        ),
    ]
