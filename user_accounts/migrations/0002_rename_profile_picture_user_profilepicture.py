# Generated by Django 3.2.9 on 2021-12-02 12:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_accounts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='profile_picture',
            new_name='profilepicture',
        ),
    ]
